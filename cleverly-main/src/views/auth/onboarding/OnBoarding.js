import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../../components/button';
import Pagination from '../../../components/pagination';

import { preparePages } from './helpers';
import styles from './OnBoarding.styles';

function Panel({
  icon,
  title,
  subTitle,
  confirmButtonLabel,
  confirmButtonAction,
  action,
  actionPosition,
  page,
  pages,
}) {
  return (
    <>
      <View style={[styles.actionContainer, { alignItems: actionPosition }]}>
        {action}
      </View>
      <View style={styles.iconContainer}>{icon}</View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <Pagination pages={pages} activePage={page} />
      <View>
        <Button label={confirmButtonLabel} onPress={confirmButtonAction} />
      </View>
    </>
  );
}

export default function OnBoarding({ navigation }) {
  const [page, setPage] = useState(0);

  function handleNextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  function handleBack() {
    setPage((prevPage) => prevPage - 1);
  }

  const pages = preparePages(navigation, handleNextPage, handleBack);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Panel page={page} pages={pages} {...pages[page]} />
      </View>
    </SafeAreaView>
  );
}

Panel.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  subTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  confirmButtonLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  actionPosition: PropTypes.string,
  pages: PropTypes.arrayOf(PropTypes.object),
  activePage: PropTypes.number,
  confirmButtonAction: PropTypes.func,
  action: PropTypes.element,
};
