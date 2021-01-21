import { Component } from '@angular/core';
import { ConfirmationService, MenuItem, TreeNode } from 'primeng/api';
import { mockMembers } from './mock-members';

@Component({
  selector: 'app-organization-units',
  templateUrl: './organization-units.component.html',
  styleUrls: ['./organization-units.component.scss'],
})
export class OrganizationUnitsComponent {
  organizationUnits: TreeNode[] = [
    {
      label: 'Management',
      expanded: true,
      children: [
        {
          label: 'Selling',
          expanded: true,
          children: [
            {
              label: 'Customer Relations',
            },
            {
              label: 'Marketing',
            },
          ],
        },
        {
          label: 'Supporting',
          expanded: true,
          children: [
            {
              label: 'Buying',
            },
            {
              label: 'Human Resources',
            },
          ],
        },
      ],
    },
  ];

  selectedUnit: TreeNode;

  members = mockMembers;

  get tableData() {
    return this.members.filter(user => user.parents.indexOf(this.selectedUnit.label) > -1);
  }

  breadcrumbItems: MenuItem[] = [
    {
      icon: 'fas fa-home',
      url: '/',
    },
    {
      icon: 'fas fa-wrench mr-1',
      label: 'Administration',
    },
    {
      icon: 'fas fa-sitemap mr-1',
      label: 'Organization Units',
    },
  ];

  isDialogVisible: boolean;

  memberAutocompleteData: typeof mockMembers = [];

  filteredMembers = [];

  constructor(private confirmationService: ConfirmationService) {}

  newMember() {
    this.memberAutocompleteData = [];
    this.isDialogVisible = true;
  }

  filterMember(event) {
    let filtered: any[] = [];
    let query = event.query;

    const arr = this.members.filter(m => {
      const memberFromAnotherOrg = m.parents.indexOf(this.selectedUnit.label) < 0;
      const isMemberSelected =
        this.memberAutocompleteData.findIndex(memb => memb.fullName === m.fullName) > -1;

      return memberFromAnotherOrg && !isMemberSelected;
    });

    for (let i = 0; i < arr.length; i++) {
      let member = arr[i];
      if (member.fullName.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(member);
      }
    }

    this.filteredMembers = filtered;
  }

  addMember() {
    this.memberAutocompleteData.forEach(newMember => {
      const index = this.members.findIndex(member => member.fullName === newMember.fullName);
      this.members[index].parents.push(this.selectedUnit.label);
    });

    this.isDialogVisible = false;
  }

  removeMember(member, event: MouseEvent) {
    this.confirmationService.confirm({
      target: event.target,
      message: `Are you sure you want to remove the member ${member.fullName}?`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        const index = this.members.findIndex(m => m.fullName === member.fullName);
        const parentIndex = this.members[index].parents.findIndex(
          parent => parent === this.selectedUnit.label
        );

        this.members[index].parents.splice(parentIndex, 1);
      },
      reject: () => {},
    });
  }
}
