import { signInAnonymously } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

export default function login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const [signUpNow, setSignUpNow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        src="/clone-bg.jpg"
        fill
        sizes=""
        alt=""
        className="-z-10 !hidden opacity-60 sm:!inline"
        style={{ objectFit: "cover" }}
      />

      <img
        src="/logo.png"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 px-6 py-10 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">
          THIS IS A CLONE <b />
          {signUpNow ? "Sign Up" : "Sign In"}
        </h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="test-email:test1@test.com"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Please enter a valid email.
              </p>
            )}{" "}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              placeholder="test-password:test.123456"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="p-1 text-[13px] font-light  text-orange-500">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(signUpNow ? false : true)}
        >
          {signUpNow ? "Sign Up" : "Sign In"}
        </button>
        <div className="text-[gray]">
          {signUpNow ? "Already have an account ?" : "New to Netflix Clone ?"}
          <button
            type="button"
            className="text-white hover:underline"
            onClick={() => setSignUpNow(!signUpNow)}
          >
            {signUpNow ? "Sign In Now " : "Sign Up Now"}
          </button>
        </div>
      </form>
    </div>
  );
}
