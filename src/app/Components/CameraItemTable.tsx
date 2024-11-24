"use client";
import { GridRowsProp, DataGrid, GridColDef } from '@mui/x-data-grid';
import { CameraItem, getCameraItemsByName, CameraItemList } from '@/utils/camerasData';

const CameraItemTable: React.FunctionComponent<CameraItemTableProps> = (props: CameraItemTableProps) => {

  const cameraItems = getCameraItemsByName(props.cameraName);

  // Convert CameraItem array to DataGrid rows
  const convertToDataGridRows = (items: CameraItem[]): GridRowsProp => {
    return items.map((item, index) => ({
      id: index, // Unique row ID (can also use item.AltKV or another unique field)
      AltKV: item.AltKV,
      SKParent: item.SKParent,
      RegNumberParent: item.RegNumberParent,
      NameParent: item.NameParent,
      Position: item.Position,
      PartsCount: item.Parts ? item.Parts.length : 0
    }));
  };

  const rows: GridRowsProp = convertToDataGridRows(cameraItems || []);

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "AltKV", headerName: "AltKV k dátumu", width: 100, type: 'number' },
    { field: "SKParent", headerName: "SK", width: 100, type: 'number' },
    { field: "RegNumberParent", headerName: "Registračné číslo", width: 300 },
    { field: "NameParent", headerName: "Názov 1", width: 600 },
    { field: "Position", headerName: "Pozícia", width: 80 },
    { field: "PartsCount", headerName: "Množstvo dielov", width: 100, type: 'number' }
  ];

  return (
    <DataGrid rows={rows} columns={columns}
      onRowClick={(params:any)=> props.onRowClick(params.row as CameraItemList)}
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

interface CameraItemTableProps {
  onRowClick: (row: CameraItemList) => void;
  cameraName: string;
}

export default CameraItemTable;