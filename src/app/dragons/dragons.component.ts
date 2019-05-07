import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppService } from '../app.service';
import { Dragon } from '../models/dragon.model';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
	selector: 'app-dragons',
	templateUrl: './dragons.component.html',
	styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent implements OnInit, AfterViewInit {

	@ViewChild(MatSort) sort: MatSort;

	displayedColumns: string[] = ['name', 'type'];
	data: Dragon[] = [];
	isLoadingResults = true;
	public dataSource = new MatTableDataSource<Dragon>();

	constructor(private _service: AppService) { }

	ngOnInit() {
		this._service.getDragons()
			.subscribe(res => {
				this.data = res;
				console.log(this.data);
				this.isLoadingResults = false;
			}, err => {
				console.log(err);
				this.isLoadingResults = false;
			});
	}

	ngAfterViewInit(): void {
		this.dataSource.sort = this.sort;
	}

}
