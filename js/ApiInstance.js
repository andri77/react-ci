
'use strict';
import React, { Component } from 'react';
import axios from 'axios';

var ApiInstance = axios.create({
  baseURL: 'https://spacerise.herokuapp.com/parse',
  timeout: 5000,
  headers: {'X-Parse-Application-Id': '3DMM7ivUW9jyazUf69ddbVFD6L2furPt7yskkBTGmf6Ejm'}
});

export default ApiInstance;