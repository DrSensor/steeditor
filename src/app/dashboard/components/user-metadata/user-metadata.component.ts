import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserData } from '../../../store/auth-store';

@Component({
  selector: 'app-user-metadata',
  templateUrl: './user-metadata.component.html',
  styleUrls: ['./user-metadata.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMetadataComponent {
  @Input()
  userData: UserData;

  get avatarCSS(): string {
    return `url(${this.userData.avatar})`;
  }
}
