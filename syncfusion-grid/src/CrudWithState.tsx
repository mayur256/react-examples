import { ColumnDirective, ColumnsDirective, DataStateChangeEventArgs, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import { DataSourceChangedEventArgs, Edit, Inject, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import {
    ChipDirective,
    ChipListComponent,
    ChipsDirective,
} from "@syncfusion/ej2-react-buttons";
import { useEffect, useState } from 'react';

function CrudWithState() {
    let grid: Grid | null = null;
    
    const toolbarOptions: any = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const editSettings: any = { allowEditing: true, allowAdding: true, allowDeleting: true };

    // state definition
    const [data, setData] = useState<any[] | undefined>([
        { key: 'john', name: 'John', age: 30, numbers: [{ digit: '1' }, { digit: '3' }] },
        { key: 'mark', name: 'Mark', age: 25, numbers: [{ digit: '8' }, { digit: '4' }] }
    ])

    useEffect(() => {
        renderComplete();
    }, [data])

    const renderComplete = () => {
        // console.log({ bataBounded: grid })
        const data = grid?.getCurrentViewRecords();
        console.log({ currentViewRecords: data })
        
    };

    const dataStateChange = (state: DataStateChangeEventArgs) => {
        const action: any = state.action;
        const data: any = action.data;
        // console.log({ data })
        // state.cancelEdit?.();
        updateReactState(data);
    }
    const dataSourceChanged = (state: DataSourceChangedEventArgs): void => {
        // console.log({ dataSourceChanged: state })
        const newData: any = state.data;
        // console.log(newData)
        // state.endEdit?.();
        updateReactState(newData);
    }

    const updateReactState = (newData: any) => {
        setData((data) => {
            const tData = data?.map((el: any) => {
                if (el.key === newData?.key && !Array.isArray(newData.numbers)) {
                    const tNumbers = newData.numbers.split(',')
                        .map((el: any) => ({ digit: el }))
                    return { ...el, numbers: tNumbers }
                }
                return el;
            })
            // console.log({ tData })
            return tData;
        })
    }

    // Templates
    function NumbersChip(props: { numbers: any[]; }) {
        return (
            <>
                <ChipListComponent
                    id="chip-avatar"
                >
                    <ChipsDirective>
                        {Array.isArray(props.numbers) && props.numbers.map((number) => (
                            <ChipDirective
                                key={number.digit}
                                text={number.digit}
                                leadingIconCss="anne"
                            />
                        ))}
                    </ChipsDirective>
                </ChipListComponent>
                {/* {props.users.map((user) => (
                    <span key={user.id}>{user.userText}</span>
                ))} */}
            </>
        )
    }

    function NumberEditTemp(props: any) {
        const numString = Array.isArray(props.numbers) && props.numbers.map((el: any) => el.digit).join(',');
        return <input defaultValue={!numString ? 0 : numString} name="numbers" />
    }
    
    return <div className='control-pane'>
        <br /><br /><br />
        <div className='control-section'>
            <GridComponent
                dataSource={{ result: data, count: data?.length ?? 0 }}
                ref={g => grid = g}
                editSettings={editSettings}
                toolbar={toolbarOptions}
                dataStateChange={dataStateChange}
                dataSourceChanged={dataSourceChanged}
                dataBound={renderComplete}
            >
                <ColumnsDirective>
                    <ColumnDirective field='name' headerText='Name' width='120' />
                    <ColumnDirective field='age' headerText='Age' width='150' />
                    <ColumnDirective field='numbers' headerText='Numbers' width='150' template={NumbersChip} editTemplate={NumberEditTemp} />
                </ColumnsDirective>
                <Inject services={[Page, Edit, Toolbar]} />
            </GridComponent>
        </div>
    </div>
};
export default CrudWithState;