import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Dragon } from '@app/_models';
import { AppState } from '@app/state/initial';
import { GetDragon } from '@app/state/dragons/dragons.actions';
import { selectDragon } from '@app/state/dragons/dragons.selectors';

@Component({
	selector: 'app-dragon-details',
	templateUrl: './dragon-details.component.html',
	styleUrls: ['./dragon-details.component.scss']
})
export class DragonDetailsComponent implements OnInit {

	public dragon: Dragon;

	constructor(
		private _route: ActivatedRoute,
		private _store: Store<AppState>
	) { }

	ngOnInit() {
		console.log(this._route.snapshot.params['id']);
		this._store.dispatch(new GetDragon(this._route.snapshot.params['id']));

		this._store.pipe(select(selectDragon)).subscribe(data => {
			if (data !== undefined && data !== null) {
				console.log(data);
				this.dragon = data;
			}
		});
	}
}
