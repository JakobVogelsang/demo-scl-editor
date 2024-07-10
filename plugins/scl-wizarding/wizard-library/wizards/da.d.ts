import { TemplateResult } from 'lit';
import '@material/mwc-button';
import '@material/mwc-list/mwc-list-item';
import '../../foundation/components/scl-wizarding-textfield.js';
import '../../foundation/components/scl-wizarding-select.js';
import '../../foundation/components/scl-wizarding-checkbox.js';
import { Wizard } from '../foundation.js';
export declare function renderAdditionalDaContent(fc: string, dchg: string | null, qchg: string | null, dupd: string | null): TemplateResult[];
export declare function createDaWizard(element: Element): Wizard;
export declare function editDAWizard(element: Element): Wizard;
