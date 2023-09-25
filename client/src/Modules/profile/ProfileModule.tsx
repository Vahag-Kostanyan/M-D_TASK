import { useQuery } from "@apollo/client";
import PostCreate from "./components/PostCreate"
import { useNavigate } from "react-router-dom";
import { GET_ME } from "../../pages/profile/query";

function ProfileModule() {


  const navigation = useNavigate();

  if (!localStorage.getItem('accessToken')) {
    navigation('/');
  }

  const { data, error, loading } = useQuery(GET_ME);

  if (error) {
    navigation('/');
  }


  return (
    <div>
      <PostCreate />
    </div>
  )
}

export default ProfileModule