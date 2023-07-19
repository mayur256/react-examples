import { ColumnDirective, ColumnsDirective, DataStateChangeEventArgs, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DataSourceChangedEventArgs, Edit, Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';

function CrudWithState() {
    let grid: Grid | null;
    let data: any;
    const toolbarOptions: any = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings: any = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const renderComplete = () => {
        console.log('render complete of grid', grid)
    }
    const dataStateChange = (state: DataStateChangeEventArgs) => {
        console.log({ dataStateChange: state })
    }
    const dataSourceChanged = (state: DataSourceChangedEventArgs): void => {
        console.log({ dataSourceChanged: state })
    }

    data = [
        { name: 'John', age: 30 },
        { name: 'Mark', age: 25 }
    ]
    return <div className='control-pane'>
        <br /><br /><br />
        <div className='control-section'>
            <GridComponent
                dataSource={data}
                ref={g => grid = g}
                editSettings={editSettings}
                toolbar={toolbarOptions}
                allowGrouping={true}
                dataStateChange={dataStateChange}
                dataSourceChanged={dataSourceChanged}
                dataBound={renderComplete}
            >
                <ColumnsDirective>
                    <ColumnDirective field='name' headerText='Name' width='120' />
                    <ColumnDirective field='age' headerText='Age' width='150' />
                </ColumnsDirective>
                <Inject services={[Page, Edit, Toolbar]} />
            </GridComponent>
        </div>
    </div>
};
export default CrudWithState;