import { Component, OnInit } from '@angular/core';
import { Dragon } from '../../models/dragon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-dragon-details',
	templateUrl: './dragon-details.component.html',
	styleUrls: ['./dragon-details.component.scss']
})
export class DragonDetailsComponent implements OnInit {

	dragon: Dragon = new Dragon;
	isLoadingResults = true;

	constructor(
		private _route: ActivatedRoute, 
		private _service: AppService, 
		private _router: Router
	) { }

	ngOnInit() {
		console.log(this._route.snapshot.params['id']);
		this.getDragonDetails(this._route.snapshot.params['id']);
	}

	getDragonDetails(id) {
		this._service.getDragon(id)
			.subscribe(data => {
				this.dragon = data;
				console.log(this.dragon);
				this.isLoadingResults = false;
			});
	}

	deleteDragon(id) {
		this.isLoadingResults = true;
		this._service.deleteDragon(id)
			.subscribe(res => {
				this.isLoadingResults = false;
				this._router.navigate(['/dragons']);
			}, (err) => {
				console.log(err);
				this.isLoadingResults = false;
			}
			);
	}

}
