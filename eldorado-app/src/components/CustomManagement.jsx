import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';
import fetchCategories from '../services/ManagementService';

const CustomManagement = ({ createCatgory, createDevice }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const allCatgories = await fetchCategories();
      setCategories(allCatgories);
    };
    fetch();
  }, []);

  return (
    <div>
      <Menu attached="top">
        <Dropdown item icon="play" simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name="dropdown" />
              <span className="text">Categories</span>
              <Dropdown.Menu>
                {!categories ? (
                  <span className="text">Categories</span>
                ) : (
                  categories.map((category, index) => {
                    return (
                      <Dropdown.Item key={index}>{category.name}</Dropdown.Item>
                    );
                  })
                )}
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item onClick={() => createCatgory()}>
              Create category
            </Dropdown.Item>
            <Dropdown.Item onClick={() => createDevice()}>
              Create device
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Menu position="right">
          <div className="ui right aligned category search item">
            <div className="ui transparent icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search devices..."
              />
              <i className="search link icon" />
            </div>
            <div className="results" />
          </div>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default CustomManagement;
