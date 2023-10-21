// External Libraries and Frameworks
import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";


// Components


function RootLayout() {


  return (
    <>
      {/* <MainNavigation /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
