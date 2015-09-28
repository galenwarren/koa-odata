"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entity = entity;
exports.property = property;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _model = require("./model");

var _entity = require("./entity");

var _property = require("./property");

var entityMetadata = Symbol();
exports.entityMetadata = entityMetadata;
var propertiesMetadata = Symbol();

exports.propertiesMetadata = propertiesMetadata;

function entity() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return function (constructor) {
    if (_lodash2["default"].isString(options)) {
      options = {
        name: options
      };
    }

    options = _lodash2["default"].defaults({}, options || {}, {
      name: constructor.name,
      model: "default"
    });

    var model = _model.ModelMetadata.getOrCreate(options.model);

    var properties = constructor.prototype[propertiesMetadata] || [];
    delete constructor.prototype[propertiesMetadata];

    var entity = new _entity.EntityMetadata({ name: options.name, model: model, properties: properties });
    model.entities.push(entity);

    constructor[entityMetadata] = entity;
  };
}

function property() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return function (prototype, name, descriptor) {
    if (_lodash2["default"].isString(options)) {
      options = {
        name: options
      };
    }

    options = _lodash2["default"].defaults({}, options || {}, {
      name: name
    });

    var properties = prototype[propertiesMetadata];
    if (!properties) {
      properties = prototype[propertiesMetadata] = [];
    }

    var property = new _property.PropertyMetadata({ name: options.name });
    properties.push(property);
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9tZXRhZGF0YS9kZWNvcmF0b3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7c0JBQWMsUUFBUTs7OztxQkFDTSxTQUFTOztzQkFDUixVQUFVOzt3QkFDUixZQUFZOztBQUtwQyxJQUFNLGNBQWMsR0FBRyxNQUFNLEVBQUUsQ0FBQzs7QUFDaEMsSUFBTSxrQkFBa0IsR0FBRyxNQUFNLEVBQUUsQ0FBQzs7OztBQUtwQyxTQUFTLE1BQU0sR0FBaUI7TUFBZixPQUFPLHlEQUFHLEVBQUU7O0FBRWxDLFNBQU8sVUFBVSxXQUFXLEVBQUc7QUFHN0IsUUFBSSxvQkFBRSxRQUFRLENBQUUsT0FBTyxDQUFFLEVBQUU7QUFDekIsYUFBTyxHQUFHO0FBQ1IsWUFBSSxFQUFFLE9BQU87T0FDZCxDQUFBO0tBQ0Y7O0FBR0QsV0FBTyxHQUFHLG9CQUFFLFFBQVEsQ0FBRSxFQUFFLEVBQUUsT0FBTyxJQUFJLEVBQUUsRUFBRTtBQUN2QyxVQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7QUFDdEIsV0FBSyxFQUFFLFNBQVM7S0FDakIsQ0FBQyxDQUFDOztBQUdILFFBQU0sS0FBSyxHQUFHLHFCQUFjLFdBQVcsQ0FBRSxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUM7O0FBSXpELFFBQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbkUsV0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7O0FBR2pELFFBQU0sTUFBTSxHQUFHLDJCQUFtQixFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDaEcsU0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFFLENBQUM7O0FBRzlCLGVBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxNQUFNLENBQUM7R0FFdEMsQ0FBQTtDQUVGOztBQUtNLFNBQVMsUUFBUSxHQUFrQjtNQUFoQixPQUFPLHlEQUFJLEVBQUU7O0FBRXJDLFNBQU8sVUFBVSxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRztBQUc3QyxRQUFJLG9CQUFFLFFBQVEsQ0FBRSxPQUFPLENBQUUsRUFBRTtBQUN6QixhQUFPLEdBQUc7QUFDUixZQUFJLEVBQUUsT0FBTztPQUNkLENBQUE7S0FDRjs7QUFHRCxXQUFPLEdBQUcsb0JBQUUsUUFBUSxDQUFFLEVBQUUsRUFBRSxPQUFPLElBQUksRUFBRSxFQUFFO0FBQ3ZDLFVBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQyxDQUFDOztBQUdILFFBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQy9DLFFBQUksQ0FBQyxVQUFVLEVBQUU7QUFDZixnQkFBVSxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNqRDs7QUFHRCxRQUFNLFFBQVEsR0FBRywrQkFBcUIsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsY0FBVSxDQUFDLElBQUksQ0FBRSxRQUFRLENBQUUsQ0FBQztHQUU3QixDQUFBO0NBRUYiLCJmaWxlIjoibGliL21ldGFkYXRhL2RlY29yYXRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQge01vZGVsTWV0YWRhdGF9IGZyb20gXCIuL21vZGVsXCI7XG5pbXBvcnQge0VudGl0eU1ldGFkYXRhfSBmcm9tIFwiLi9lbnRpdHlcIjtcbmltcG9ydCB7UHJvcGVydHlNZXRhZGF0YX0gZnJvbSBcIi4vcHJvcGVydHlcIjtcblxuLyoqXG4qIFN5bWJvbHMgdXNlZCB0byBhdHRhY2ggbWV0YWRhdGFcbiovXG5leHBvcnQgY29uc3QgZW50aXR5TWV0YWRhdGEgPSBTeW1ib2woKTtcbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzTWV0YWRhdGEgPSBTeW1ib2woKTtcblxuLyoqXG4qIERlY29yYXRvciB0aGF0IGRlc2lnbmF0ZXMgYW4gZW50aXR5IHR5cGVcbiovXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5KCBvcHRpb25zID0ge30gKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCBjb25zdHJ1Y3RvciApIHtcblxuICAgIC8vIGlmIHN0cmluZyBwYXNzZWQgaW4sIHRoaXMgaXMgdGhlIG5hbWVcbiAgICBpZiAoXy5pc1N0cmluZyggb3B0aW9ucyApKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBuYW1lOiBvcHRpb25zXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXNzaWduIGRlZmF1bHRzXG4gICAgb3B0aW9ucyA9IF8uZGVmYXVsdHMoIHt9LCBvcHRpb25zIHx8IHt9LCB7XG4gICAgICBuYW1lOiBjb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgbW9kZWw6IFwiZGVmYXVsdFwiXG4gICAgfSk7XG5cbiAgICAvLyBhY2Nlc3MgdGhlIG1vZGVsIG9iamVjdFxuICAgIGNvbnN0IG1vZGVsID0gTW9kZWxNZXRhZGF0YS5nZXRPckNyZWF0ZSggb3B0aW9ucy5tb2RlbCApO1xuXG4gICAgLy8gZmluZCBhbnkgZGlzY292ZXJlZCBwcm9wZXJ0aWVzICh0aGUgcHJvcGVyeSBkZWNvcmF0b3JzIHJ1biBmaXJzdCxcbiAgICAvLyBzbyB0aGV5IHRlbXBvcmFyaWx5IHN0b3JlIHByb3BlcnRpZXMgaGVyZSlcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gY29uc3RydWN0b3IucHJvdG90eXBlW3Byb3BlcnRpZXNNZXRhZGF0YV0gfHwgW107XG4gICAgZGVsZXRlIGNvbnN0cnVjdG9yLnByb3RvdHlwZVtwcm9wZXJ0aWVzTWV0YWRhdGFdO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBlbnRpdHkgb2JqZWN0IGFuZCBhZGQgdG8gbW9kZWwncyBlbnRpdGllc1xuICAgIGNvbnN0IGVudGl0eSA9IG5ldyBFbnRpdHlNZXRhZGF0YSh7IG5hbWU6IG9wdGlvbnMubmFtZSwgbW9kZWw6IG1vZGVsLCBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzIH0pO1xuICAgIG1vZGVsLmVudGl0aWVzLnB1c2goIGVudGl0eSApO1xuXG4gICAgLy8gc3RvcmUgdGhlIG1ldGFkYXRhIG9uIHRoZSBjb25zdHJ1Y3RvciBzbyB3ZSBjYW4gZmluZCBpdCBsYXRlclxuICAgIGNvbnN0cnVjdG9yW2VudGl0eU1ldGFkYXRhXSA9IGVudGl0eTtcblxuICB9XG5cbn1cblxuLyoqXG4qIERlY29yYXRvciB0aGF0IGRlc2lnbmF0ZXMgYSBwcm9wZXJ0eVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9wZXJ0eSggb3B0aW9ucyA9ICB7fSApIHtcblxuICByZXR1cm4gZnVuY3Rpb24oIHByb3RvdHlwZSwgbmFtZSwgZGVzY3JpcHRvciApIHtcblxuICAgIC8vIGlmIHN0cmluZyBwYXNzZWQgaW4sIHRoaXMgaXMgdGhlIG5hbWVcbiAgICBpZiAoXy5pc1N0cmluZyggb3B0aW9ucyApKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBuYW1lOiBvcHRpb25zXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gYXNzaWduIGRlZmF1bHRzXG4gICAgb3B0aW9ucyA9IF8uZGVmYXVsdHMoIHt9LCBvcHRpb25zIHx8IHt9LCB7XG4gICAgICBuYW1lOiBuYW1lXG4gICAgfSk7XG5cbiAgICAvLyBhY2Nlc3MgdGhlIHByb3BlcnR5IG1ldGFkYXRhXG4gICAgbGV0IHByb3BlcnRpZXMgPSBwcm90b3R5cGVbcHJvcGVydGllc01ldGFkYXRhXTtcbiAgICBpZiAoIXByb3BlcnRpZXMpIHtcbiAgICAgIHByb3BlcnRpZXMgPSBwcm90b3R5cGVbcHJvcGVydGllc01ldGFkYXRhXSA9IFtdO1xuICAgIH1cblxuICAgIC8vIGNyZWF0ZSB0aGUgcHJvcGVydHkgb2JqZWN0IGFuZCBhZGQgdG8gY29sbGVjdGlvblxuICAgIGNvbnN0IHByb3BlcnR5ID0gbmV3IFByb3BlcnR5TWV0YWRhdGEoeyBuYW1lOiBvcHRpb25zLm5hbWUgfSk7XG4gICAgcHJvcGVydGllcy5wdXNoKCBwcm9wZXJ0eSApO1xuXG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
