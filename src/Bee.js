var Bee = function() {
  Grub.call(this);
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

Bee.prototype.age = 5;
Bee.prototype.color = 'yellow';
Bee.prototype.job = 'keep on growing';