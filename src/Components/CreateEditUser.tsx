import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {userSelector} from "../Redux/Slices/userSlice";

const CreateEditUser = () => {
  const {user} = useSelector(userSelector);
  useEffect(() => {
    console.log("create", user);
  }, [user]);

  return <div>CreateEditUser</div>;
};

export default CreateEditUser;
