
import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NavbarComponent),
    multi: true
};



@Component({
	moduleId: module.id,
    selector: 'my-navbar',
    templateUrl : 'navbar.component.html',
    styleUrls   : ['navbar.component.css'],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class NavbarComponent implements ControlValueAccessor{

	private HideExpandedNavBar: boolean = true;
	private HideSearchInput: boolean = true;

	private innerSearchInputText: string = '';

	constructor() {

	}

	toggleMenu() {
		this.HideExpandedNavBar = !this.HideExpandedNavBar;
	}

	closeMenu() {
		this.HideExpandedNavBar = true;
	}

	onSearchSubmit(formvalue:string) {
		console.log(formvalue);
	}


    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //get accessor
    get value(): any {
        return this.innerSearchInputText;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerSearchInputText) {
            this.innerSearchInputText = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerSearchInputText) {
            this.innerSearchInputText = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }


}