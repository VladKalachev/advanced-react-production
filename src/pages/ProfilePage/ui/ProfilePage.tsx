import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from "@/entities/Profile";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useCallback, useEffect } from "react";
import { fetchProfileData } from "@/entities/Profile";
import { useSelector } from "react-redux";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "@/entities/Currency";
import { Country } from "@/entities/Country";
import { TextTheme, Text } from "@/shared/ui/Text";
import { ValidateProfileError } from "@/entities/Profile/model/consts/consts";
import { useTranslation } from "react-i18next";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "@/widgets/Page";
import { HStack, VStack } from "@/shared/ui/Stack";
import { EditableProfileCard } from "@/features/editableProfileCard";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page
        data-testid="ProfilePage"
        className={classNames("", {}, [className])}
      >
        <EditableProfileCard id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
