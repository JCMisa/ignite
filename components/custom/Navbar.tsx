import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// mark this component as async to make this as server side which is more faster
const Navbar = async () => {
  const session = await auth(); // access the user by using the session from auth
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Image src={"/ignite-logo.svg"} alt="logo" width={28} height={28} />
          <p className="text-black text-lg font-bold">
            <span className="text-primary">Ig</span>nite
          </p>
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href={"/startup/create"}>
                <span>Create</span>
              </Link>
              {/* new nextjs feature for form to access server side by using a form instead of button */}
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>
              {/* <button
                onClick={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                Logout
              </button> */}
              <Link href={`/user/${session?.user?.id}`}>
                <Image
                  src={session?.user?.image as string}
                  alt="profile"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
