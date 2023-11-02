import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { Avatar } from "@/shared/ui/Avatar";
import { Select } from "@/shared/ui/Select";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { Country, CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/Stack";

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeLastName: (name: string) => void;
  onChangeFirstName: (name: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;

  const { t } = useTranslation("profile");

  if (isLoading) {
    return (
      <HStack
        max
        justify="center"
        className={classNames(cls.ProfileCard, { [cls.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, {}, [className, cls.error])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t("Произошла ошибка при загрузке профиля")}
          text={t("Попробуйте обновить страницу")}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.ProfileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </HStack>
      )}

      <Input
        value={data?.first}
        placeholder={t("Ваше имя")}
        className={cls.input}
        onChange={onChangeFirstName}
        readonly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder={t("Ваша фамилия")}
        className={cls.input}
        onChange={onChangeLastName}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder={t("Ваш возраст")}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder={t("Город")}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder={t("Введите имя пользователя")}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder={t("Введите ссылку на аватар")}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
