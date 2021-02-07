import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  public settingsForm: FormGroup;
  public readonly themes: string[] = [
    'Light',
    'Dark'
  ];

  constructor(private formBuilder: FormBuilder) {
    this.createSettingsForm();
  }

  private createSettingsForm(): void {
    this.settingsForm = this.formBuilder.group({
      theme: [localStorage.getItem('themeSetting') ?? 'Light'],
      pokemonPageSize: [localStorage.getItem('pokemonPageSizeSetting') ?? 20],
    });
  }

  public onSubmit(): void {
    localStorage.setItem('themeSetting', this.settingsForm.get('theme').value);
    localStorage.setItem('pokemonPageSizeSetting', this.settingsForm.get('pokemonPageSize').value);
    console.log('Your form data : ', this.settingsForm.value);
    // TODO Show snackbar message
  }
}
