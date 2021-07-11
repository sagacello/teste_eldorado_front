import React, { useState, useEffect, useContext } from 'react';
import { Grid, Image, Transition } from 'semantic-ui-react';
import CustomManagement from '../components/CustomManagement';
import CustomHeader from '../components/CustomHeader';
import CustomAllDevices from '../components/CustomAllDevices';
import fetchDevices from '../services/getAllDevicesService';
import CentralContext from '../context/Context';
import fetchDeleteDevices from '../services/deleteDeviceFromId';
import logo from '../img/logo2.png';

function Management() {
  const [allContent, setAllContent] = useState();
  const { categoryId } = useContext(CentralContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const deleteDevices = async (id) => {
    await fetchDeleteDevices(id);
    const all = await fetchDevices();
    setAllContent(all);
  };
  const allFeed = async () => {
    const all = await fetchDevices();
    if (categoryId) {
      return setAllContent(categoryId);
    }
    setAllContent(all);
  };
  useEffect(() => {
    allFeed();
  }, [setAllContent, categoryId]);

  const renderContent = () => (
    <Grid textAlign="center" style={{ padding: '10vh' }}>
      {!allContent
        ? null
        : allContent.slice(0, 9).map((item, index) => (
            <Grid.Column key={index} width={5}>
              <CustomAllDevices
                deleteDevices={deleteDevices}
                index={index}
                item={item}
              />
            </Grid.Column>
          ))}
    </Grid>
  );

  return (
    <div style={{  marginTop: '5%', }}>
    <Transition.Group  animation="browse" duration="4500" alt="logo-eldorado">
        {visible && (
          <Image centered size="medium" src={ logo } />
        )}
      </Transition.Group>
    <Grid
      textAlign="center"
      style={{
        height: '150vh',
        backgroundColor: 'rgb(33, 33, 33)',
        marginTop: '-30vh',
      }}
      verticalAlign="middle"
    >
      
      <Grid.Column style={{ maxWidth: 1000 }}>
      <CustomHeader message="ELDORADO MANAGEMENT"/>

        <CustomManagement />
        {!allContent ? null : renderContent()}
      </Grid.Column>
    </Grid>
    
    </div>
  );
}

export default Management;
