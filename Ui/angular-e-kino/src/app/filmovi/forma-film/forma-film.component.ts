import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { glumciFilmDTO } from 'src/app/glumci/glumacCreationModel';
import { ImageServiceService } from 'src/app/service/image-service.service';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector-model';
import { toBase64 } from 'src/app/utilities/utils';
import { FilmService } from '../film.service';
import { filmCreationDTO, filmDTO } from '../model';

@Component({
  selector: 'app-forma-film',
  templateUrl: './forma-film.component.html',
  styleUrls: ['./forma-film.component.css']
})
export class FormaFilmComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private filmServis: FilmService, private router: Router, private imageService: ImageServiceService) { }

  form!: FormGroup;
  formData: FormData = new FormData();
  images: string[] = [];
  imagesFiles: File[] = [];



  @Input()
  model!: filmDTO;

  @Output()
  onSaveChanges = new EventEmitter<filmCreationDTO>();


  @Input()
  neOznaceniZanrovi: multipleSelectorModel[] = [];

  @Input()
  oznaceniZanrovi: multipleSelectorModel[] = [];

  @Input()
  neOznacenaKina: multipleSelectorModel[] = [];

  @Input()
  oznacenaKina: multipleSelectorModel[] = [];

  @Input()
  oznaceniGlumci: glumciFilmDTO[] = [];


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      naziv: ['', {
        validators: [Validators.required]
      }],
      opis: '',
      prikazujeSe: false,
      trailer: '',
      datumIzalska: '',
      poster: '',
      zanrovi: '',
      kina: '',
      glumci: ''
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }


  changeMarkdown(content: string) {
    this.form.get('opis').setValue(content);
  }

  imageSelected(event: any) {
    if (event.target.files.length > 0) {
      this.imagesFiles.push(event.target.files[0]);
      toBase64(event.target.files[0]).then((img) => {
        this.images.push(img);
      });
    }
  }
  saveChanges() {

    const zanrovi = this.oznaceniZanrovi.map(value => value.key);
    this.form.get('zanrovi').setValue(zanrovi);

    const kinaIds = this.oznacenaKina.map(value => value.key);
    this.form.get('kina').setValue(kinaIds);

    const glumci = this.oznaceniGlumci.map(val => {
      return { id: val.id, uloga: val.uloga }
    });
    this.form.get('glumci').setValue(glumci);

    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(file: File) {
    this.form.get('poster').setValue(file);
  }



}
