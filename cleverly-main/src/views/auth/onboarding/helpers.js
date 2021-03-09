import React from 'react';
import { FormattedMessage } from 'react-intl';

import TextButton from '../../../components/text-button';
import IconButton from '../../../components/icon-button';

import { SCREENS } from '../../../navigation/constants';

import TutorsIcon from '../../../assets/svg/onboarding-screen/tutors.svg';
import ScheduleIcon from '../../../assets/svg/onboarding-screen/schedule.svg';
import SkillsIcon from '../../../assets/svg/onboarding-screen/skills.svg';
import GoBackIcon from '../../../assets/svg/icons/Go-back.svg';

import styles from './OnBoarding.styles';

export function preparePages(navigation, handleNextPage, handleBack) {
  return [
    {
      id: 'new-skills',
      icon: <SkillsIcon />,
      title: (
        <FormattedMessage
          defaultMessage={'Start Learning New Skills'}
          id={'views.auth.onboarding.skills.title'}
        />
      ),
      subTitle: (
        <FormattedMessage
          id={'views.auth.onboarding.skills.subtitle'}
          defaultMessage={
            'Learn almost any skill from a comfort of your home with our app.'
          }
        />
      ),
      confirmButtonLabel: (
        <FormattedMessage
          id={'views.auth.onboarding.get-started'}
          defaultMessage={'Get Started'}
        />
      ),
      confirmButtonAction: handleNextPage,
      action: (
        <TextButton
          TextProps={{ style: styles.skipButton }}
          onPress={() => navigation.navigate(SCREENS.AUTH.LOGIN.ID)}
          label={
            <FormattedMessage
              defaultMessage={'Skip'}
              id={'views.auth.onboarding.skip'}
            />
          }
        />
      ),
      actionPosition: 'flex-end',
    },
    {
      id: 'connect-tutors',
      icon: <TutorsIcon />,
      title: (
        <FormattedMessage
          id={'views.auth.onboarding.tutors.title'}
          defaultMessage={'Connect With the Tutors'}
        />
      ),
      subTitle: (
        <FormattedMessage
          id={'views.auth.onboarding.tutors.subtitle'}
          defaultMessage={
            'You can easily connect with thousands of tutors by using our platform.'
          }
        />
      ),
      confirmButtonLabel: (
        <FormattedMessage
          id={'views.auth.onboarding.tutors.submit'}
          defaultMessage={'Continue'}
        />
      ),
      confirmButtonAction: handleNextPage,
      action: (
        <IconButton onPress={handleBack}>
          <GoBackIcon />
        </IconButton>
      ),
      actionPosition: 'flex-start',
    },
    {
      id: 'schedule',
      icon: <ScheduleIcon />,
      title: (
        <FormattedMessage
          id={'views.auth.onboarding.schedule.title'}
          defaultMessage={'Fully Flexible Schedule'}
        />
      ),
      subTitle: (
        <FormattedMessage
          id={'views.auth.onboarding.schedule.subtitle'}
          defaultMessage={
            'There is no set schedule and you can learn whenever you want to.'
          }
        />
      ),
      confirmButtonLabel: (
        <FormattedMessage
          id={'views.auth.onboarding.schedule.submit'}
          defaultMessage={'Sign Up'}
        />
      ),
      confirmButtonAction: () => navigation.navigate(SCREENS.AUTH.SIGN_UP.ID),
      action: (
        <IconButton onPress={handleBack}>
          <GoBackIcon />
        </IconButton>
      ),
      actionPosition: 'flex-start',
    },
  ];
}
