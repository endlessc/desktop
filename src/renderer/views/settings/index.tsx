import * as React from 'react';
import { observer } from 'mobx-react-lite';

import { SettingsSection } from './store';
import { Appearance } from './components/Appearance';
import { AddressBar } from './components/AddressBar';
import { Privacy } from './components/Privacy';
import { store } from './store';
import { NavigationDrawer } from './components/NavigationDrawer';
import { Sections, Container } from './style';

const MenuItem = observer(
  ({ section, children }: { section: SettingsSection; children: any }) => (
    <NavigationDrawer.Item
      onClick={() => (store.selectedSection = section)}
      selected={store.selectedSection === section}
    >
      {children}
    </NavigationDrawer.Item>
  ),
);

export const Settings = observer(() => {
  const { selectedSection } = store;

  return (
    <Container>
      <NavigationDrawer title="Settings" search>
        <MenuItem section="appearance">Appearance</MenuItem>
        <MenuItem section="startup">On startup</MenuItem>
        <MenuItem section="address-bar">Address bar</MenuItem>
        <MenuItem section="privacy">Privacy</MenuItem>
        <MenuItem section="permissions">Site permissions</MenuItem>
        <MenuItem section="downloads">Downloads</MenuItem>
        <MenuItem section="language">Languages</MenuItem>
        <MenuItem section="shortcuts">Keyboard shortcuts</MenuItem>
        <MenuItem section="system">System</MenuItem>
      </NavigationDrawer>
      <Sections style={{ paddingTop: 48 }}>
        {selectedSection === 'appearance' && <Appearance />}
        {selectedSection === 'address-bar' && <AddressBar />}
        {selectedSection === 'privacy' && <Privacy />}
      </Sections>
    </Container>
  );
});