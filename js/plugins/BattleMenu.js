/*:
* @plugindesc Battle menu test
* @author MightyThagmar
* @help
*/

Window_PartyCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.fight,  'fight');
    this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
    this.addCommand(TextManager.item, 'item');
};
Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addSkillCommands();
        //this.addGuardCommand();
        this.addItemCommand();
        this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
        this.addAttackCommand();

    }
};

Scene_Battle.prototype.createActorCommandWindow = function() {
    this._actorCommandWindow = new Window_ActorCommand();
    this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
    this._actorCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
    //this._actorCommandWindow.setHandler('guard',  this.commandGuard.bind(this));
    this._actorCommandWindow.setHandler('item',   this.commandItem.bind(this));
    //this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
    this._actorCommandWindow.setHandler('escape', this.commandEscape.bind(this));
    this.addWindow(this._actorCommandWindow);
    //this._actorCommandWindow.width = Graphics.boxWidth /2;
}; 


// Window_BattleStatus.prototype.createFaceContents = function() {
//     this._faceContents = new Sprite();
//     var ww = this.contentsWidth();
//     var wy = this.contentsHeight();
//     this._faceContents.bitmap = new Bitmap(ww, wy);
//     this.addChildAt(this._faceContents, 2);
//     this._faceContents.move(this.standardPadding(), this.standardPadding());
// };
Window_BattleStatus.prototype.drawAllFaces = function() {
    // for (var i = 0; i < $gameParty.battleMembers().length; ++i) {
    //   var member = $gameParty.battleMembers()[i];
    //   var bitmap = ImageManager.loadFace(member.faceName());
    //   if (bitmap.width <= 0) return setTimeout(this.drawAllFaces.bind(this), 5);
    // }
    // this._faceContents.bitmap.clear();
    // for (var i = 0; i < this.maxItems(); ++i) {
    //   this.drawStatusFace(i);
    // }
};
// Window_BattleStatus.prototype.drawStatusFace = function(index) {
//     var actor = $gameParty.battleMembers()[index];
//     var rect = this.itemRect(index);
//     var ww = Math.min(rect.width - 8, Window_Base._faceWidth);
//     var wh = Math.min(rect.height - 8, Window_Base._faceHeight);
//     var wx = rect.x + rect.width - ww - 6;
//     var wy = rect.y + 4;
//     this.drawActorFace(actor, wx, wy, ww, wh);
// };

// Window_BattleStatus.prototype.drawFace = function(fn, fi, x, y, width, height) {
//     width = width || Window_Base._faceWidth;
//     height = height || Window_Base._faceHeight;
//     var bitmap = ImageManager.loadFace(fn);
//     var pw = Window_Base._faceWidth;
//     var ph = Window_Base._faceHeight;
//     var sw = Math.min(width, pw);
//     var sh = Math.min(height, ph);
//     var dx = Math.floor(x + Math.max(width - pw, 0) / 2);
//     var dy = Math.floor(y + Math.max(height - ph, 0) / 2);
//     var sx = fi % 4 * pw + (pw - sw) / 2;
//     var sy = Math.floor(fi / 4) * ph + (ph - sh) / 2;
//     this._faceContents.bitmap.blt(bitmap, sx, sy, sw, sh, dx, dy);
// };
// Scene_Battle.prototype.selectEnemySelection = function() {
//     //oldSelectEnemySelec_method.call(this);
//     this._enemyWindow.refresh();
//     this._enemyWindow.show();
//     this._enemyWindow.select(0);
//     this._enemyWindow.activate();
//     if ( !$gameTroop._enemies.length ) { return; }
//     if ($gameTroop._enemies.length == 1) {
//     	this._enemyWindow.processOk();
//     }
// };
Scene_Battle.prototype.setActionIcon = function() {
    // var item = BattleManager.inputtingAction().item();
    // BattleManager.actor().setActionIcon(item.iconIndex);
    // this._statusWindow.refresh();
};

Scene_Battle.prototype.setGuardIcon = function() {
    // var item = $dataSkills[BattleManager.actor().guardSkillId()]
    // BattleManager.actor().setActionIcon(item.iconIndex);
    // this._statusWindow.refresh();
};

Scene_Battle.prototype.clearActionIcon = function() {
    // BattleManager.actor().clearActionIcon();
    // this._statusWindow.refresh();
};