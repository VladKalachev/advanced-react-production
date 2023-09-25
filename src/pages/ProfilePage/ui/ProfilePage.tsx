import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  ProfileCard,
  profileReducer,
} from "@/entities/Profile";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useEffect } from "react";
import { fetchProfileData } from "@/entities/Profile";
import { useSelector } from "react-redux";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        data-testid="ProfilePage"
        className={classNames("", {}, [className])}
      >
        <ProfileCard data={data} isLoading={isLoading} error={error} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
