import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { Card as CardDeprecated } from "@/shared/ui/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text as TextDepreacetd } from "@/shared/ui/Text";
import { Text } from "@/shared/ui/Text";
import { StarRating } from "@/shared/ui/StarRating";
import { Modal } from "@/shared/ui/Modal";
import { Input as InputDeprecated } from "@/shared/ui/Input";
import {
  Button as ButtonDeprecated,
  ButtonSize,
  ButtonTheme,
} from "@/shared/ui/Button";
import { Drawer } from "@/shared/ui/Drawer";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { Card } from "@/shared/ui/Card";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState("");

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept]
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <TextDepreacetd title={feedbackTitle} />
      <InputDeprecated
        data-testid="RatingCard.Input"
        value={feedback}
        onChange={setFeedback}
        placeholder={t("Ваш отзыв")}
      />
    </>
  );

  const content = (
    <>
      <VStack align="center" gap="8" max>
        <TextDepreacetd title={starsCount ? t("Спасибо за оценку!") : title} />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <ButtonDeprecated
                data-testid="RatingCard.Close"
                onClick={cancelHandle}
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t("Закрыть")}
              </ButtonDeprecated>
              <ButtonDeprecated
                data-testid="RatingCard.Send"
                onClick={acceptHandle}
              >
                {t("Отправить")}
              </ButtonDeprecated>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <ButtonDeprecated
              fullWidth
              onClick={acceptHandle}
              size={ButtonSize.L}
            >
              {t("Отправить")}
            </ButtonDeprecated>
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <CardDeprecated className={className} max data-testid="RatingCard">
      {content}
    </CardDeprecated>
  );
});
