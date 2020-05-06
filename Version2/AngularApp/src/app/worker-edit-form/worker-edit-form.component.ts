import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkersServerService } from '../workers-server.service';
import { Worker } from '../worker';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Avatar {
  name: string;
}

@Component({
  selector: 'app-worker-edit-form',
  templateUrl: './worker-edit-form.component.html',
  styleUrls: ['./worker-edit-form.component.css']
})
export class WorkerEditFormComponent implements OnInit {

  public stateCtrl = new FormControl();
  public filteredStates: Observable<Avatar[]>;

  public worker: Worker = <Worker>{};
  public workeraaa: Worker;
  public selectedId: number;
  public loading: boolean;

  public newForm: FormGroup;

  avatar: Avatar[] = [
    {
      name: 'assets\\avatar_1.png',
    },
    {
      name: 'assets\\avatar_2.png',
    },
    {
      name: 'assets\\avatar_3.png',
    },
    {
      name: 'assets\\avatar_4.png',
    },
    {
      name: 'assets\\avatar_5.png',
    }
  ];


  constructor(private route: ActivatedRoute,
    private workersService: WorkersServerService,
    private fb: FormBuilder) 
  {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.avatar.slice())
      );
       fb.group({
        id: new FormControl(0),
        avatar: new FormControl(null, [Validators.required]),
        name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        surname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        job: new FormControl(null, [Validators.required]),
      });
  }

  private _filterStates(value: string): Avatar[] {
    const filterValue = value.toLowerCase();

    return this.avatar.filter(avatar => avatar.name.toLowerCase().indexOf(filterValue) === 0);
  }

  public test() {
    let newWorker = this.newForm.value as Worker;
    console.log(newWorker);
  }

  public onSubmit() {
    let newWorker = this.newForm.value as Worker;
    this.workersService.updateWorker(this.selectedId,newWorker).subscribe(result => console.log(result));
  }

  ngOnInit(): void {
    this.loading = true;
    this.route.paramMap
      .subscribe(params => {
        this.selectedId = +params.get('id');
      });
    this.workersService.getOneWorker(this.selectedId)
    .subscribe(worker => {
      this.worker = worker;
    },
   error => console.log(error));
    this.loadWorker();
    console.log(this.workeraaa);
    this.newForm = this.fb.group({
      id: new FormControl(0),
      avatar: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      surname: new FormControl('janex', [Validators.required, Validators.minLength(3)]),
      job: new FormControl(null, [Validators.required]),
    });
    this.loading = false;
  }
  loadWorker(): void{
    //this.loading = true;
    this.workersService.getOneWorker(this.selectedId)
      .subscribe(worker =>
        this.workeraaa = worker
        );
  }
  
}
