// top level imports
import { ReactElement } from "react";

// Component definition
export function FileUpload(): ReactElement {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <input type="file" name="file" data-testid="file-input" />
        </div>
    )
}