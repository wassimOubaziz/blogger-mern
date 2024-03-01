import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-auto mt-20 flex items-start justify-center md:block">
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
              This is the sign-up page. You can use this page to sign up for an
              account.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex max-w-md flex-col gap-4 m-2 flex-1">
            <div>
              <div className="block">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="Username"
                autoFocus={true}
                required
              />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@wassim.com"
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
                required
              />
            </div>
            <Button type="submit" gradientDuoTone={"purpleToPink"}>
              Submit
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={"/sign-in"} className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
