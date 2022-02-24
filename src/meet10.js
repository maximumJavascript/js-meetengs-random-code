const tv = {
    _isOn: false,
    _channel: 0,
    get isOn() {
        return this._isOn;
    },
    get channel() {
        return this._channel;
    },
    doToggle() {
        if (this.isOn) this._setOn();
        else this._setOff();
    },
    _setOn() {
        this._isOn = true;
    },
    _setOff() {
        this._isOn = false;
    },
    // 0-9
    switchChannel(newChannel) {
        if (!this.isOn) {
            console.error('tv is off');
            return;
        }

        this._channel = newChannel;
    }
};