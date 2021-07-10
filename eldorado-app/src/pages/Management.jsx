import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomManagement from '../components/CustomManagement';
import CustomHeader from '../components/CustomHeader';
import CustomSubHeader from '../components/CustomSubHeader';

function Management() {
  

  return (
    <Grid
      textAlign="center"
      style={{
        height: '115vh',
        backgroundColor: 'rgb(33, 33, 33)',
        marginTop: '-15vh',
      }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 500 }}>
        <CustomHeader message="Eldorado" />
        <CustomSubHeader message="Management" />

        <CustomManagement
          
        />
      </Grid.Column>
    </Grid>
  );
}

export default Management;
