import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRequestGetComponent } from './test-request-get/test-request-get.component';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    TestRequestGetComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, HttpClientModule, CommonModule
  ],
  exports: [
    TestRequestGetComponent
  ],
})
export class TestRequestModule { }
