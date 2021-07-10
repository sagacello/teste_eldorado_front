import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import fetchCategories from '../services/getAllCategoriesService';
import fetchCategoriesFromId from '../services/getCategoriesFromId';
import CentralContext from '../context/Context';
import fetchDevices from '../services/getAllDevicesService';
import fetchDeleteCategories from '../services/deleteCategoryFromId';

const CustomManagement = ({ createCatgory, createDevice }) => {
  const [categories, setCategories] = useState([]);
  const { setcategoryId } = useContext(CentralContext);

  const filterCategory = async (id) => {
    const filterCategoryId = await fetchCategoriesFromId(id);
    setcategoryId(filterCategoryId);
  };

  const deleteCategory = async (id) => {
    await fetchDeleteCategories(id);
    const allCatgories = await fetchCategories();
    setCategories(allCatgories);
    const filterCategoryAll = await fetchDevices();
    setcategoryId(filterCategoryAll);
  };

  const allCategory = async () => {
    const filterCategoryAll = await fetchDevices();
    setcategoryId(filterCategoryAll);
  };

  useEffect(() => {
    const fetch = async () => {
      const allCatgories = await fetchCategories();
      setCategories(allCatgories);
    };
    fetch();
  }, []);

  return (
    <Menu  widths={3}>
      <Menu.Item  style={{ padding: '2px', backgroundColor: 'rgb(200, 200, 200)' }} >
        <Dropdown item icon="angle double down" simple>
          <Dropdown.Menu  style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
            <Dropdown.Item>
              <Icon name="dropdown" />
              <span className="text">Categories</span>
              <Dropdown.Menu  style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
                <Dropdown.Item onClick={() => allCategory()}>All</Dropdown.Item>
                {!categories ? (
                  <span className="text">Categories</span>
                ) : (
                  categories.map((category) => {
                    return (
                      <Dropdown.Item
                        onClick={() => filterCategory(category.id)}
                        key={category.id}
                      >
                        {category.name}
                      </Dropdown.Item>
                    );
                  })
                )}
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item >
              <Icon name="dropdown" />
              <span className="text">Delete Category</span>
              <Dropdown.Menu  style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
                {!categories ? (
                  <span className="text">Delete Category</span>
                ) : (
                  categories.map((category) => {
                    return (
                      <Dropdown.Item
                        onClick={() => deleteCategory(category.id)}
                        key={category.id}
                      >
                        {category.name}
                      </Dropdown.Item>
                    );
                  })
                )}
              </Dropdown.Menu>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
      <Menu.Item  onClick={() => createCatgory()} name="Create Category" />
      <Menu.Item onClick={() => createDevice()} name="Create Device" />
    </Menu>
  );
};

export default CustomManagement;
