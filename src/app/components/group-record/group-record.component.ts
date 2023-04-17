import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../models/Group';
import { GroupService } from '../../services/group.service';

@Component({
    selector: 'app-group-record',
    templateUrl: './group-record.component.html',
    styleUrls: ['./group-record.component.scss'],
})
export class GroupRecordComponent implements OnInit {
    @Input()
    public groupData: Group[] = [];

    public constructor(private service: GroupService) {}

    public ngOnInit(): void {}
}
