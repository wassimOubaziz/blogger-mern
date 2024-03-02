import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axios } from "./../axios";
import { useCookies } from "react-cookie";

export default function SignIn() {
  const [formatData, setFormatData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cookies, setCookie] = useCookies(["token", "role"]);

  const handleChanges = (e) => {
    setFormatData({ ...formatData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/sign-in", formatData)
      .then((res) => {
        setLoading(false);
        setCookie("token", res.data.token, { path: "/" });
        setCookie("role", res.data.role, { path: "/" });
      })
      .catch((e) => {
        setError(e.response.data.message);
        setLoading(false);
        setTimeout(() => {
          setError(null);
        }, 8000);
      });
  };
  return (
    <div className="min-h-screen mt-20 flex items-start justify-center md:block">
      <div className=" flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <div className="px-3 flex-col max-w-3xl flex-1">
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-4xl  font-semibold dark:text-white "
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500  via-purple-500 to-pink-500 rounded-lg text-white">
                MERN
              </span>
              Blog
            </Link>
            <p className="mt-5 text-sm">
              This is the sign-in page. You can use this page to sign in to your
              account.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex max-w-md flex-col gap-4 m-2 flex-1">
            <div>
              <div className="block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@wassim.com"
                onChange={handleChanges}
                autoFocus={true}
                required
              />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput
                id="password"
                type="password"
                placeholder="Password"
                onChange={handleChanges}
                required
              />
            </div>
            <Button
              type="submit"
              gradientDuoTone={"purpleToPink"}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size={"sm"} />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to={"/sign-up"} className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {error && (
            <Alert className="mt-5" color={"failure"}>
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
