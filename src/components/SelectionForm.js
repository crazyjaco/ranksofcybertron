import React from 'react';

class SelectionForm extends React.Component {
    constructor(props) {
        super(props);
        this.currentFaction = props.currentFaction;
        this.currentDivision = props.currentDivision;
        this.currentRank = props.currentRank;
        this.currentUnit = props.currentUnit;
        this.handleSelectChange = props.handleSelectChange;
    }
    render() {
        return (
            <section className="section-input-form">
                <span><label for="input-form">SELECT YOUR RANK</label></span>
                <form className="input-form">
                    <label for="faction">Faction</label>
                    <select 
                        id="faction" 
                        onChange={this.handleSelectChange}
                        defaultValue={this.currentFaction}
                    >
                        <option value="faction-autobot">Autobot</option>
                        <option value="faction-decepticon">Decepticon</option>
                    </select>
                    <label for="unit">Unit</label>
                    <select
                        id="unit" 
                        onChange={this.handleSelectChange}
                        defaultValue={this.currentUnit}
                    >
                        <option value="unit-applied-sciences">Applied Sciences</option>
                        <option value="unit-black-ops">Black Ops</option>
                        <option value="unit-espionage">Espionage</option>
                        <option value="unit-infantry">Infantry</option>
                        <option value="unit-medical">Medical</option>
                        <option value="unit-transport">Transport</option>
                        <option value="unit-weapons">Weapons</option>
                    </select>
                    <label for="rank">Rank</label>
                    <select
                        id="rank"
                        onChange={this.handleSelectChange}
                        defaultValue={this.currentRank}
                    >
                        <option value="rank-raider">Raider</option>
                        <option value="rank-sergeant">Sergeant</option>
                        <option value="rank-captain">Captain</option>
                        <option value="rank-major">Major</option>
                        <option value="rank-general">General</option>
                    </select>
                    <label for="division">Division</label>
                    <select
                        id="division"
                        onChange={this.handleSelectChange}
                        defaultValue={this.currentDivision}
                    >
                        <option value="division-air-force">Air Force</option>
                        <option value="division-ground-force">Ground Force</option>
                        <option value="division-sea-force">Sea Force</option>
                        <option value="division-space-force">Space Force</option>
                    </select>
                </form>
            </section>
        );
    }
}

export default SelectionForm;