//import Image from "next/image";
"use client";
import { getCameraList } from '@/utils/camerasData';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

const CameraList: React.FunctionComponent<CameraListProps> = (props: CameraListProps) => {

  const cameras = getCameraList() || [];

  return (
    <List component={Stack} direction="row">
      {cameras.map((value, index) => {
        return (
          <ListItem key={index} dense sx={{ maxWidth: 400 }}>
            <ListItemButton role={undefined}
              selected={props.selectedIndex === index}
              onClick={()=> props.onButtonClick(index, value.Name)}>
              <ListItemText id={'camera-name-' + index} primary={value.Name} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  );
}

interface CameraListProps {
  onButtonClick: (selectedIndex: number, cameraName: string) => void;
  selectedIndex: number;
}

export default CameraList;