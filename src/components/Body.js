import Login from "./Login";
import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"; // Corrected import

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/home",
      element: <Home/>
    }
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user; // Correctly destructuring user object
        dispatch(addUser({ uid, email })); // Dispatch addUser action with user details
      } else {
        dispatch(removeUser()); // Correctly calling removeUser action creator
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [dispatch]); // Add dispatch as a dependency

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
