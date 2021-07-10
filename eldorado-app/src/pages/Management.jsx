import React, { useState, useEffect, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import CustomManagement from '../components/CustomManagement';
import CustomHeader from '../components/CustomHeader';
import CustomAllDevices from '../components/CustomAllDevices';
import fetchDevices from '../services/getAllDevicesService';
import CentralContext from '../context/Context';
import fetchDeleteDevices from '../services/deleteDeviceFromId';

function Management() {
  const [allContent, setAllContent] = useState();
  const { categoryId } = useContext(CentralContext);

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
            <Grid.Column  key={index} width={5}>
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
    <Grid 
      textAlign="center"
      style={{
        height: '140vh',
        backgroundColor: 'rgb(52, 52, 52)',
        marginTop: '-10vh',
      }}
      verticalAlign="middle"
    >
      <Grid.Column  style={{ maxWidth: 1000 }}>
        <CustomHeader message="Eldorado Management" />
        <CustomManagement />
        {!allContent ? null : renderContent()}
      </Grid.Column>
    </Grid>
  );
}

export default Management;
