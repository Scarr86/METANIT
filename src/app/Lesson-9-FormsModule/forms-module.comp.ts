import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm, FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import {LogService} from '../../log.service';

export class Phone {
    constructor(public title: string,
        public price: Number,
        public company: string) { }
}


export class User{
    name:string;
    email:string;
    phone:string;
}

@Component({
    selector: 'form-module-L8-comp',
    templateUrl: './forms-module.comp.html',
    styleUrls:['./forms-module.comp.css']
})
export class FormModuleComp implements OnInit {
    phone: Phone = new Phone('Title', 5, "Huawei");
    phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];

    constructor(private logService:LogService, private formBuilder: FormBuilder){

            logService.write(this.constructor.toString().match(/\w+/g)[1] + " Load", 'h1');
     }


    // addPhone(title:string, price:number, company:string){
    //     this.phones.push(new Phone(title,price,company));
    // }
    addPhone() {
        this.phones.push(new Phone(this.phone.title, this.phone.price, this.phone.company));
    }
    addPhone2(title: NgModel, price: NgModel, company: NgModel) {
        this.addPhone();
        console.log('title ' + title.viewModel);
        console.log('price ' + price.viewModel);
        console.log('company ' + company.viewModel);
    }
    onTitleChange() {
        if (this.phone.title == 'no')
            this.phone.title = 'my_undefined'
    }
    onPriceChange() {
        if (this.phone.price > 100)
        this.phone.price = new Number(100);
        //Создаем новый объект типа Number что бы Angular выполнил обновление данных
    }

/*********************************************** */
    //Валидация
    user:User = new User();
    
    addUser(){
        this.logService.write(this.user.name);
        this.logService.write(this.user.email);
        this.logService.write(this.user.phone);
    }

    //ngForm
    submit(myForm:NgForm){
        console.log(myForm);
        this.user.name = myForm.value.name;
        this.user.email = myForm.value.email;
        this.user.phone = myForm.value.phone;

        this.addUser();
    }
    onSubmit(form:NgForm){
        this.logService.write('onSubmit');
    }

/*********************************************** */
    //Reactive Forms
    myFormGroup: FormGroup ;
    
    ngOnInit(){
        this.myFormGroup = this.formBuilder.group({
            'userName': ['name', [Validators.required, this.userNameValidator]],
            'userEmail':['email',[Validators.required,Validators.email]],
            'userPhone': ['123', [Validators.pattern("[0-9]{11}")]],
            'userPhones': this.formBuilder.array([ ['+7',[Validators.required, Validators.pattern("[0-9]{11}")] ]  ])
        });


        // this.myFormGroup = new FormGroup({
        //     'userName': new FormControl('name', [Validators.required, this.userNameValidator]),
        //     'userEmail': new FormControl('email',[Validators.required,Validators.email]),
        //     'userPhone': new FormControl('123', Validators.pattern("[0-9]{11}")),
        //     'userPhones': new FormArray([new FormControl('+7', Validators.required)])
        // });
    }

    ReactiveFormSubmit(){
        this.logService.write('ReactiveFormSubmit()');
        console.log(this.myFormGroup);
    }
    userNameValidator(control: FormControl):{[s:string]:boolean}{
        if(control.value === 'no'){
            return {'userName':true};
        }
        return null;
    }
    addUserPhone(){
        this.logService.write('addUserPhone()');
        (<FormArray>this.myFormGroup.controls["userPhones"]).push(new FormControl('+7', [Validators.required, Validators.pattern("[0-9]{11}")]));
    }

}
