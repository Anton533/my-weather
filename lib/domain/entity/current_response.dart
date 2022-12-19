import 'package:json_annotation/json_annotation.dart';

part 'current_response.g.dart';

@JsonSerializable(fieldRename: FieldRename.snake, explicitToJson: true)
class CurrentWeatherResponse {
  final LocationDTO location;
  final CurrentResponse current;
  CurrentWeatherResponse({
    required this.location,
    required this.current,
  });
  factory CurrentWeatherResponse.fromJson(Map<String, dynamic> json) =>
      _$CurrentWeatherResponseFromJson(json);

  Map<String, dynamic> toJson() => _$CurrentWeatherResponseToJson(this);
}

@JsonSerializable(fieldRename: FieldRename.snake, explicitToJson: true)
class LocationDTO {
  final String name;
  final String region;
  final String country;
  final double lat;
  final double lon;
  final String tzId;
  final int localtimeEpoch;
  final String localtime;
  LocationDTO({
    required this.name,
    required this.region,
    required this.country,
    required this.lat,
    required this.lon,
    required this.tzId,
    required this.localtimeEpoch,
    required this.localtime,
  });
  factory LocationDTO.fromJson(Map<String, dynamic> json) =>
      _$LocationDTOFromJson(json);

  Map<String, dynamic> toJson() => _$LocationDTOToJson(this);
}

@JsonSerializable(fieldRename: FieldRename.snake, explicitToJson: true)
class CurrentResponse {
  final num lastUpdatedEpoch;
  final String lastUpdated;
  final double tempC;
  final double tempF;
  final int isDay;
  final Condition condition;
  final double windMph;
  final double windKph;
  final num windDegree;
  final String windDir;
  final num pressureMb;
  final double pressureIn;
  final num precipMm;
  final num precipIn;
  final num humidity;
  final num cloud;
  final num feelslikeC;
  final double feelslikeF;
  final num visKm;
  final num visMiles;
  final num uv;
  final double gustMph;
  final double gustKph;
  CurrentResponse({
    required this.lastUpdatedEpoch,
    required this.lastUpdated,
    required this.tempC,
    required this.tempF,
    required this.isDay,
    required this.condition,
    required this.windMph,
    required this.windKph,
    required this.windDegree,
    required this.windDir,
    required this.pressureMb,
    required this.pressureIn,
    required this.precipMm,
    required this.precipIn,
    required this.humidity,
    required this.cloud,
    required this.feelslikeC,
    required this.feelslikeF,
    required this.visKm,
    required this.visMiles,
    required this.uv,
    required this.gustMph,
    required this.gustKph,
  });
  factory CurrentResponse.fromJson(Map<String, dynamic> json) =>
      _$CurrentResponseFromJson(json);

  Map<String, dynamic> toJson() => _$CurrentResponseToJson(this);
}

@JsonSerializable(fieldRename: FieldRename.snake, explicitToJson: true)
class Condition {
  final String text;
  final String icon;
  final int code;
  Condition({
    required this.text,
    required this.icon,
    required this.code,
  });
  factory Condition.fromJson(Map<String, dynamic> json) =>
      _$ConditionFromJson(json);

  Map<String, dynamic> toJson() => _$ConditionToJson(this);
}
