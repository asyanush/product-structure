"use client";
import { GridRowsProp, DataGrid, GridColDef } from '@mui/x-data-grid';
import { ItemPart, getCameraPartsByItemName } from '@/utils/camerasData';

const CameraPartsTable: React.FunctionComponent<CameraPartsTableProps> = (props: CameraPartsTableProps) => {

  const cameraParts = getCameraPartsByItemName(props.cameraName, props.itemName);
  // Convert CameraPart array to DataGrid rows
  const convertToDataGridRows = (items: ItemPart[]): GridRowsProp => {
    return items.map((item, index) => ({
      id: index, // Unique row ID (can also use item.AltKV or another unique field)
      SKChild:item.SKChild,
      RegNumberChild:item.RegNumberChild,
      NameChild:item.NameChild,
      MNF:item.MNF,
      MJ:item.MJ,
      TotalPrice:item.TotalPrice
    }));
  };

  const rows: GridRowsProp = convertToDataGridRows(cameraParts || []);

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "SKChild", headerName: "SK", width: 100, type: 'number' },
    { field: "RegNumberChild", headerName: "Registračné číslo", width: 300 },
    { field: "NameChild", headerName: "Názov 1", width: 600 },
    { field: "MNF", headerName: "MNF", width: 80, type: 'number' },
    { field: "MJ", headerName: "MJ evidencia", width: 80 },
    { field: "TotalPrice", headerName: "Celková kalkulačná cena", width: 100, type: 'number' }
  ];

  return (
    <DataGrid rows={rows} columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
    />
  );
}

interface CameraPartsTableProps {
  cameraName: string;
  itemName: string;
}

export default CameraPartsTable;