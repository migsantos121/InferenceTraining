import React, { Component } from 'react';
import axios from 'axios';
import * as actionCreators from '../actions/index';

import { Link } from 'react-router';
import DropdownMenu, { NestedDropdownMenu } from 'react-dd-menu';

import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

import Menu, {SubMenu, MenuItem, MenuItemGroup} from 'rc-menu';
import 'rc-menu/assets/index.css';

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inferenceTags: null,
      inferenceTag: -1,
      inferenceTagName: '',
      tagModifiers: null,
      tagModifier: -1,
      tagModifierName: '',
      trainingTags: null,
      checkedMaps: null,
    }
  }
  fromTagsToMaps(inferenceTag_id, modTag_id){
    this.props.dispatch(
      actionCreators.fromTagsToMaps({	inferenceTag_id: inferenceTag_id, modTag_id: modTag_id})
    ).then((res) => {
      var checkedMaps = [];
      for ( var i = 0; i < res.data.length; i ++){
        checkedMaps.push(res.data[i].trainingTag_id);
      }
      this.setState({
        checkedMaps: checkedMaps
      });
    }).catch((err) => {
      if(!err) return;
      console.log("api error", err);
    });
  }
  componentWillMount(){
    var _this = this;
    this.props.dispatch(
      actionCreators.getInferenceTags({})
    ).then((res) => {
      _this.setState({
        inferenceTags: res.data,
        inferenceTag: res.data[0].id,
        inferenceTagName: res.data[0].inferencetag
      });
      if (_this.state.tagModifier != -1){
        _this.fromTagsToMaps.bind(_this, res.data[0].id, _this.state.tagModifier)();
      }
    }).catch((err) => {
      if(!err) return;
      console.log("api error", err);
     });

    this.props.dispatch(
      actionCreators.getTagModifiers({})
    ).then((res) => {
      _this.setState({
        tagModifiers: res.data,
        tagModifier: res.data[0].id,
        tagModifierName: res.data[0].tagModifier
      });
      if (_this.state.inferenceTag != -1){
        _this.fromTagsToMaps.bind(_this, _this.state.inferenceTag, res.data[0].id)();
      }
    }).catch((err) => {
      if(!err) return;
      console.log("api error", err);
    });

    this.props.dispatch(
      actionCreators.getTrainingTags({})
    ).then((res) => {
      _this.setState({
        trainingTags: res.data
      });
    }).catch((err) => {
      if(!err) return;
      console.log("api error", err);
    });
  }

  componentDidMount() {
  }
  
  trainingTagsChange(newTagsToMaps){
    this.setState({
      checkedMaps: newTagsToMaps
    });
  }

  submitMaps(){
    const {inferenceTag, tagModifier, checkedMaps} = this.state;
    this.props.dispatch(
      actionCreators.submitMaps({	
        inferenceTag_id: inferenceTag, 
        modTag_id: tagModifier, 
        trainingTag_ids: checkedMaps
      })
    ).then((res) => {
      if(res.data.success === 'true')
        alert("success");
      else
        alert("not success");
    }).catch((err) => {
      if(!err) return;
      console.log("api error", err);
    });
  }

  setTagMod(pk, name){
    this.setState({inferenceTag: pk, inferenceTagName: name})
    this.fromTagsToMaps.bind(this, pk, this.state.tagModifier)();
  }
  setInfTag(pk, name){
    this.setState({tagModifier: pk, tagModifierName: name})
    this.fromTagsToMaps.bind(this, this.state.inferenceTag, pk)();
  }
  handleMenuClick(){

  }
  render() {
    const {inferenceTags, tagModifiers, trainingTags, inferenceTagName, tagModifierName} = this.state;

    var _this = this;
    return (
      <div>
        <Menu mode="horizontal" onClick={this.handleClick}>
          <SubMenu title={"InferanceTags"} key="1">
          {
              inferenceTags && inferenceTags.map(function(inftag){
                return (
                  <MenuItem 
                    key={inftag.id} 
                    onClick={_this.setInfTag.bind(_this,inftag.id, inftag.inferencetag)}>
                      {inftag.inferencetag}
                  </MenuItem>
                )
              })
          }
          </SubMenu>

          <SubMenu title={"TagModifiers"} key="4">
          {
              tagModifiers && tagModifiers.map(function(tagMod){
                return (
                  <MenuItem 
                    key={tagMod.id} 
                    onClick={_this.setTagMod.bind(_this,tagMod.id, tagMod.tagModifier)}>
                      {tagMod.tagModifier}
                  </MenuItem>
                )
              })
          }
          </SubMenu>
        </Menu>
        <div className="demo-container">
        <h4>
          Inference Tag: &nbsp;
          <span style={{color: 'red'}}>
            {inferenceTagName}
          </span>
        </h4>
        <h4>
          Tag Modifiers: &nbsp;
          <span style={{color: 'red'}}>
            {tagModifierName}
          </span>
        </h4>
          <CheckboxGroup
            checkboxDepth={2}
            name=""
            value={this.state.checkedMaps}
            onChange={this.trainingTagsChange.bind(this)}>
            {
                trainingTags && trainingTags.map(function(trTags){
                  return (
                      <label key={trTags.id}>
                        <Checkbox value={trTags.id}/>
                        {trTags.tag}
                        <br/>
                      </label>
                  )
                })
            }
          </CheckboxGroup>
          <br/>
          <button className="submitBtn" onClick={this.submitMaps.bind(this)}>Commit</button>
        </div>
      </div>
    );
  }
}