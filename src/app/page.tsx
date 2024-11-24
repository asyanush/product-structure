"use client";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { camerasData, CameraItemList, getCameraItemsByName } from '@/utils/camerasData';
import CameraItemTable from './Components/CameraItemTable';
import CameraList from './Components/CameraList';
import CameraPartsTable from './Components/CameraPartsTable';
import CameraCytoscape from './Components/CameraCytoscape';

const cameraItems = getCameraItemsByName(camerasData[0].Name);

const Home = () => {

  const [cameraName, setCameraName] = useState(camerasData[0].Name);
  const [selectedButton, setSelectedButton] = useState<number | 0>(0);
  const [selectedCameraItem, setSelectedCameraItem] = useState<string | ''>('');

  const handleButtonClick = (selectedIndex: number, cameraName: string) => {
    setSelectedButton(selectedIndex);
    setCameraName(cameraName);
  };

  const handleRowClick = (row: CameraItemList) => {
    setSelectedCameraItem(row.RegNumberParent);
  };

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, backgroundColor: '#1976D2', borderColor: '#1e0947' }}>
        <Typography variant="h5" align="center" color="secondary" noWrap sx={{ flex: 1, margin: "5px" }}>
          Vitajte v aplikácii Štruktúra produktu!
        </Typography>
      </Toolbar>
      <Box sx={{ flexGrow: 1, mt: 1, mb: 7, ml: 4, mr: 4 }}>

        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Typography variant="h6" align="left" color="#0" noWrap sx={{ flex: 1, margin: 1 }}>
            Kliknutím na druh kamery zobrazíte podrobnú štruktúru:
          </Typography>
          <CameraList onButtonClick={handleButtonClick} selectedIndex={selectedButton} />
        </Box>

        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h6" align="left" color="#0" noWrap sx={{ flex: 1, margin: 1 }}>
              Tabuľka štruktúry Kamery:
            </Typography>
            <CameraItemTable onRowClick={handleRowClick} cameraName={cameraName} />
          </Grid>
        </Grid>

      </Box >

      <Box sx={{ flexGrow: 1, mt: 1, mb: 7, ml: 4, mr: 4 }}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant="h6" align="left" color="#0" noWrap sx={{ flex: 1, margin: 1 }}>
                Tabuľka kamerovych dielov:
              </Typography>
              <CameraPartsTable cameraName={cameraName} itemName={selectedCameraItem} />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, mt: 1, mb: 7, ml: 4, mr: 4 }}>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant="h6" align="left" color="#0" noWrap sx={{ flex: 1, margin: 1 }}>
                Vizualizácia Kamerovych dielov:
              </Typography>
              <CameraCytoscape cameraName={cameraName} />
            </Grid>
          </Grid>

        </Box>
      </Box>
    </>
  );
}

export default Home;