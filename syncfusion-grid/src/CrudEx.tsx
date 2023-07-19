import { Ajax, getValue } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, DataStateChangeEventArgs, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DataResult, DataSourceChangedEventArgs, Edit, Inject, Page, PageSettingsModel, Toolbar } from '@syncfusion/ej2-react-grids';

function App() {
    const orderService: OrderService = new OrderService();
    let grid: Grid | null;
    let data: any;
    const toolbarOptions: any = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings: any = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
    const pageSettings: PageSettingsModel = { pageSize: 10 };
    const renderComplete = () => {
        if (grid && (grid.dataSource instanceof Array
            && !(grid.dataSource as object[]).length)) {
            const state = { skip: 0, take: 10 };
            dataStateChange(state);
        }
    }
    const dataStateChange = (state: DataStateChangeEventArgs) => {
        console.log({ dataStateChange: state })
        orderService.execute(state).then((gridData) => {
            if (grid) {
                grid.dataSource = gridData
            }
        });
    }
    const dataSourceChanged = (state: DataSourceChangedEventArgs): void => {
        console.log({ dataSourceChanged: state })
        if (state.action === 'add') {
            // orderService.addRecord(state).then(() => state.endEdit?.());
        } else if (state.action === 'edit') {
            // orderService.updateRecord(state).then(() => state.endEdit?.());
        } else if (state.requestType === 'delete') {
            // orderService.deleteRecord(state).then(() => state.endEdit?.());
        }
    }
    return <div className='control-pane'>
        <br /><br /><br />
        <ButtonComponent content="Common Save" onClick={() => console.log(grid?.getCurrentViewRecords())}/>
        <div className='control-section'>
            <GridComponent dataSource={data} ref={g => grid = g} editSettings={editSettings}
                toolbar={toolbarOptions} allowPaging={true} allowSorting={true} pageSettings={pageSettings}
                allowGrouping={true} dataStateChange={dataStateChange}
                dataSourceChanged={dataSourceChanged} dataBound={renderComplete}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' />
                    <ColumnDirective field='CustomerID' headerText='Customer Name' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                </ColumnsDirective>
                <Inject services={[Page, Edit, Toolbar]} />
            </GridComponent>
        </div>
    </div>
};
export default App;


export class OrderService {
    public ajax: Ajax = new Ajax({
        mode: true,
        onFailure: (e: Error) => false,
        type: 'GET'
    });
    private BASE_URL: string = 'https://services.syncfusion.com/react/production/api/Orders';

    public execute(state: DataStateChangeEventArgs): Promise<DataResult> {
        return this.getData(state);
    }
    public addRecord(state: DataSourceChangedEventArgs): Promise<DataResult> {
        const add: Ajax = new Ajax({
            mode: true,
            onFailure: (e: Error) => false,
            type: 'POST'
        });
        return add.send(JSON.stringify(state.data)).then((response: any) => {
            const data: any = JSON.parse(response);
            return data;
        });
    }
    public updateRecord(state: DataSourceChangedEventArgs): Promise<DataResult> {
        const update: Ajax = new Ajax({
            mode: true,
            onFailure: (e: Error) => false,
            type: 'PUT'
        });
        return update.send(JSON.stringify(state.data)).then((response: any) => {
            const data: any = JSON.parse(response);
            return data;
        });
    }
    public deleteRecord(state: DataSourceChangedEventArgs): Promise<DataResult> {
        const remove: Ajax = new Ajax({
            mode: true,
            onFailure: (e: Error) => false,
            type: 'DELETE'
        });
        return remove.send(JSON.stringify((state.data && state.data))).then((response: any) => {
            const data: any = JSON.parse(response);
            return data;
        });
    }
    private getData(state: DataStateChangeEventArgs): Promise<DataResult> {
        const pageQuery = state.skip ? `$skip=${state.skip}&$top=${state.take}` : `$top=${state.take}`;
        this.ajax.url = `${this.BASE_URL}?${pageQuery}&$inlinecount=allpages&$format=json`;

        return this.ajax.send().then((response: any) => {
            const data: any = JSON.parse(response);
            
            return {
                count: parseInt(getValue('count', data), 10),
                result: getValue('result', data)
            };
        });
    }
};