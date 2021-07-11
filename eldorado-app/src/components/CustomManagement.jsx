import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import fetchCategories from '../services/getAllCategoriesService';
import fetchCategoriesFromId from '../services/getCategoriesFromId';
import CentralContext from '../context/Context';
import fetchDevices from '../services/getAllDevicesService';
import fetchDeleteCategories from '../services/deleteCategoryFromId';
import fetchCreateCategory from '../services/createCategory';
import fetchCreateDevice from '../services/createDevice';
import CustomModalDeveci from './CustomModalDevice';

import CustomModalCategory from './CustomModalCategory';

const CustomManagement = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState(new Map());

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

  const handleSubmitCategory = async () => {
    const nameCategory = formData.get('name');
    await fetchCreateCategory(nameCategory);
    const allCatgories = await fetchCategories();
    setCategories(allCatgories);
  };

  const handleSubmitDevice = async () => {
    const color = formData.get('color');
    const partNumber = formData.get('partNumber');
    const categoryId = formData.get('categoryId');
    await fetchCreateDevice(color, partNumber, categoryId);
    const allCatgories = await fetchCategories();
    setCategories(allCatgories);
  };

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData((prevState) => new Map(prevState).set(name, value));
  }, []);

  return (
    <Menu widths={3}>
      <Menu.Item
        style={{ padding: '2px', backgroundColor: 'rgb(200, 200, 200)' }}
      >
        <Dropdown item icon="angle double down" simple>
          <Dropdown.Menu style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
            <Dropdown.Item>
              <Icon name="dropdown" />
              <span className="text">Categories</span>
              <Dropdown.Menu style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
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
            <Dropdown.Item>
              <Icon name="dropdown" />
              <span className="text">Delete Category</span>
              <Dropdown.Menu style={{ backgroundColor: 'rgb(230, 230, 230)' }}>
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
      <CustomModalCategory
        formData={formData}
        onInputChange={handleInputChange}
        onHandleSubmit={handleSubmitCategory}
      />

      <CustomModalDeveci
        formData={formData}
        onInputChange={handleInputChange}
        onHandleSubmit={handleSubmitDevice}
      />
    </Menu>
  );
};

export default CustomManagement;
