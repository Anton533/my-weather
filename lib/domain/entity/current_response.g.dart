// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'current_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

CurrentWeatherResponse _$CurrentWeatherResponseFromJson(
        Map<String, dynamic> json) =>
    CurrentWeatherResponse(
      location: LocationDTO.fromJson(json['location'] as Map<String, dynamic>),
      current:
          CurrentResponse.fromJson(json['current'] as Map<String, dynamic>),
    );

Map<String, dynamic> _$CurrentWeatherResponseToJson(
        CurrentWeatherResponse instance) =>
    <String, dynamic>{
      'location': instance.location.toJson(),
      'current': instance.current.toJson(),
    };

LocationDTO _$LocationDTOFromJson(Map<String, dynamic> json) => LocationDTO(
      name: json['name'] as String,
      region: json['region'] as String,
      country: json['country'] as String,
      lat: (json['lat'] as num).toDouble(),
      lon: (json['lon'] as num).toDouble(),
      tzId: json['tz_id'] as String,
      localtimeEpoch: json['localtime_epoch'] as int,
      localtime: json['localtime'] as String,
    );

Map<String, dynamic> _$LocationDTOToJson(LocationDTO instance) =>
    <String, dynamic>{
      'name': instance.name,
      'region': instance.region,
      'country': instance.country,
      'lat': instance.lat,
      'lon': instance.lon,
      'tz_id': instance.tzId,
      'localtime_epoch': instance.localtimeEpoch,
      'localtime': instance.localtime,
    };

CurrentResponse _$CurrentResponseFromJson(Map<String, dynamic> json) =>
    CurrentResponse(
      lastUpdatedEpoch: json['last_updated_epoch'] as num,
      lastUpdated: json['last_updated'] as String,
      tempC: (json['temp_c'] as num).toDouble(),
      tempF: (json['temp_f'] as num).toDouble(),
      isDay: json['is_day'] as int,
      condition: Condition.fromJson(json['condition'] as Map<String, dynamic>),
      windMph: (json['wind_mph'] as num).toDouble(),
      windKph: (json['wind_kph'] as num).toDouble(),
      windDegree: json['wind_degree'] as num,
      windDir: json['wind_dir'] as String,
      pressureMb: json['pressure_mb'] as num,
      pressureIn: (json['pressure_in'] as num).toDouble(),
      precipMm: json['precip_mm'] as num,
      precipIn: json['precip_in'] as num,
      humidity: json['humidity'] as num,
      cloud: json['cloud'] as num,
      feelslikeC: json['feelslike_c'] as num,
      feelslikeF: (json['feelslike_f'] as num).toDouble(),
      visKm: json['vis_km'] as num,
      visMiles: json['vis_miles'] as num,
      uv: json['uv'] as num,
      gustMph: (json['gust_mph'] as num).toDouble(),
      gustKph: (json['gust_kph'] as num).toDouble(),
    );

Map<String, dynamic> _$CurrentResponseToJson(CurrentResponse instance) =>
    <String, dynamic>{
      'last_updated_epoch': instance.lastUpdatedEpoch,
      'last_updated': instance.lastUpdated,
      'temp_c': instance.tempC,
      'temp_f': instance.tempF,
      'is_day': instance.isDay,
      'condition': instance.condition.toJson(),
      'wind_mph': instance.windMph,
      'wind_kph': instance.windKph,
      'wind_degree': instance.windDegree,
      'wind_dir': instance.windDir,
      'pressure_mb': instance.pressureMb,
      'pressure_in': instance.pressureIn,
      'precip_mm': instance.precipMm,
      'precip_in': instance.precipIn,
      'humidity': instance.humidity,
      'cloud': instance.cloud,
      'feelslike_c': instance.feelslikeC,
      'feelslike_f': instance.feelslikeF,
      'vis_km': instance.visKm,
      'vis_miles': instance.visMiles,
      'uv': instance.uv,
      'gust_mph': instance.gustMph,
      'gust_kph': instance.gustKph,
    };

Condition _$ConditionFromJson(Map<String, dynamic> json) => Condition(
      text: json['text'] as String,
      icon: json['icon'] as String,
      code: json['code'] as int,
    );

Map<String, dynamic> _$ConditionToJson(Condition instance) => <String, dynamic>{
      'text': instance.text,
      'icon': instance.icon,
      'code': instance.code,
    };
