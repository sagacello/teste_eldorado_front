import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomManagement from '../components/CustomManagement';
import CustomHeader from '../components/CustomHeader';

function Management() {

  return (
    <Grid
      textAlign="center"
      style={{
        height: '150vh',
        backgroundColor: 'rgb(52, 52, 52)',
        marginTop: '-40vh',
      }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 700}}>
        <CustomHeader message="Eldorado Management" />
        <CustomManagement />
      </Grid.Column>
    </Grid>
  );
}

export default Management;
