import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { profileReducer } from "@/entities/Profile";
// import { Page } from "@/widgets/Page";
// import { VStack } from '@/shared/ui/redesigned/Stack';
// import { EditableProfileCard } from "@/features/editableProfileCard";

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
      <div
        data-testid="ProfilePage"
        className={classNames("", {}, [className])}
      >
        ProfilePage
        {/* <VStack gap="16" max> */}
        {/* <EditableProfileCard id={id} /> */}
        {/* </VStack> */}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
